class Login extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // window.addEventListener("login", () => {
        //     console.log('LLL')
        // })
        this.innerHTML = `<style>
        form {
            border: 3px solid #f1f1f1;
        }

        /* Full-width inputs */
        input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        .center {
            margin: auto;
            width: 50%;
            padding: 10px;
          }

        /* Set a style for all buttons */
        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }

        /* Add a hover effect for buttons */
            button:hover {
            opacity: 0.8;
        }

        /* Extra style for the cancel button (red) */
        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
        }

        /* Center the avatar image inside this container */
        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
        }

        /* Avatar image */
        img.avatar {
            width: 10%;
            border-radius: 50%;
        }

        /* Add padding to containers */
        .container {
            padding: 16px;
        }

        /* The "Forgot password" text */
        span.psw {
            float: right;
            padding-top: 16px;
        }

        /* Change styles for span and cancel button on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
            .cancelbtn {
                width: 100%;
            }
        }
    </style>
    <form>
        <div class="imgcontainer">
            <img src="http://localhost:9001/avatar.png" class="avatar" />
        </div>
        <div>
            <div class="center">
                <label for="username" class="center"><b>Username</b></label>
                <input type="text" id="uname" placeholder="Enter your username" name="username" class="center" required/>
                <br/>
            </div>

            <div class="center">
                <label for="password" class="center"><b>Password</b></label>
                <input type="password" id="pwd" placeholder="Enter your password" name="password" class="center" required/>
                <br/>
            </div>

            <div class="center">
                <div id="err-text"></div>
            </div>

            <div class="center">
                <button type="button" id="login">Login</button>
            </div>

        </div>
    </form>`;

    // var customEvent = new CustomEvent('login-btn', { bubbles: true, cancelable: true, detail: "test" });
    // var element = document.getElementById("login");
    // element. dispatchEvent(customEvent);
    // document.addEventListener("login", () => {
    //     alert('success')
    //     customE
    // })
    var event1 = new CustomEvent('mycustomevent', { bubbles: true, cancelable: true, detail: {} });
    var element1 = document.getElementById("login");
    element1.addEventListener('click',() => {
        element1.dispatchEvent(event1);
    });

    }
}

window.customElements.define("pb-login", Login);