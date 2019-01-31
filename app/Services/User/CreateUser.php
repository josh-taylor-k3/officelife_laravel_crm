<?php

namespace App\Services\User;

use App\Models\User\User;
use App\Services\BaseService;
use App\Models\Account\Account;
use Illuminate\Support\Facades\Hash;
use App\Services\Account\Account\LogAction;
use App\Exceptions\EmailAlreadyUsedException;

class CreateUser extends BaseService
{
    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'account_id' => 'required|integer|exists:accounts,id',
            'author_id' => 'nullable|integer|exists:users,id',
            'email' => 'required|email|string',
            'password' => 'required|string|max:255',
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'is_administrator' => 'required|boolean',
            'is_dummy' => 'nullable|boolean',
        ];
    }

    /**
     * Create a user.
     *
     * @param array $data
     * @return User
     */
    public function execute(array $data) : User
    {
        $this->validate($data);

        $this->validatePermissions($data['author_id'], 'hr');

        if (! $this->uniqueInAccount($data)) {
            throw new EmailAlreadyUsedException;
        }

        $user = User::create([
            'account_id' => $data['account_id'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'first_name' => $this->nullOrValue($data, 'first_name'),
            'last_name' => $this->nullOrValue($data, 'last_name'),
            'permission_level' => ($data['is_administrator'] ? config('homas.authorizations.administrator') : config('homas.authorizations.user')),
            'is_dummy' => $this->valueOrFalse($data, 'is_dummy'),
        ]);

        (new LogAction)->execute([
            'account_id' => $data['account_id'],
            'action' => 'user_created',
            'objects' => json_encode('{"author": '.$data['author_id'].', "user": '.$user->id.'}'),
            'is_dummy' => $this->valueOrFalse($data, 'is_dummy'),
        ]);

        return $user;
    }

    /**
     * Make sure a user is unique per email address in this account.
     *
     * @param array $data
     * @return bool
     */
    private function uniqueInAccount(array $data)
    {
        $user = User::where('account_id', $data['account_id'])
            ->where('email', $data['email'])
            ->first();

        if ($user) {
            return false;
        }

        return true;
    }
}
