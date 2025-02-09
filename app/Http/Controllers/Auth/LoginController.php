<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\ThrottlesLogins;

class LoginController extends Controller
{
    use ThrottlesLogins;

    /**
     * Shows the login page.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            return redirect('/home');
        }

        return Inertia::render('Auth/Login');
    }

    /**
     * Authenticate the user.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::check()) {
            return Redirect::route('home');
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return Redirect::route('home');
        }

        return Redirect::route('login')
                        ->withErrors(trans('auth.login_invalid_credentials'));
    }

    /**
     * Logs out the user.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        Auth::logout();

        return Redirect::route('login');
    }
}
