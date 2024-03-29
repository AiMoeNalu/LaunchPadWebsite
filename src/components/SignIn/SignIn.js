import React from 'react';

const SignIn = () => {
    return(
        <main className="pa4 black-80">
            <form className="measure center">
                <div id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </div>
                <div class="">
                    <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                </div>
                <div class="lh-copy mt3">
                    <a href="#0" class="f6 link dim black db">Register</a>
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                </div>
            </form>
        </main>
    );
}

export default SignIn;