
import React from 'react';
import "./style.css";

function JoinTwitter() {
  return (
    <div className="container">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC" alt="Twitter Logo" className="logo" />
      <h1 className="heading">Join Twitter today</h1>
      <button className="btn btn-google">Sign up with Google</button>
      <button className="btn btn-apple">Sign up with Apple</button>
      <span className="or">or</span>
      <button className="btn btn-create">Create Account</button>
      <p className="text">By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including Cookie Use.</p>
      <p className="text">Have an account already? <a href="#">Log in</a></p>
    </div>
  );
}

export default JoinTwitter;
