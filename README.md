# Note: Discontinued Project
Chrome extension to read medium articles for free

<img src="medium-free-preview.png" alt="Medium Free Preview"/>
Medium Free URL: <a href="https://medium-free.vercel.app/read?url=https://medium.com/@satoshihgsn/explaining-zero-knowledge-proofs-in-5-levels-of-difficulty-70a73572d70f/@satoshihgsn/explaining-zero-knowledge-proofs-in-5-levels-of-difficulty-70a73572d70f">Click here</a>

Orignal URL: <a href="https://medium.com/@satoshihgsn/explaining-zero-knowledge-proofs-in-5-levels-of-difficulty-70a73572d70f/@satoshihgsn/explaining-zero-knowledge-proofs-in-5-levels-of-difficulty-70a73572d70f">Click Here</a>

# Methods to use
Currently there is two methods to use it and they are
* Bookmarklet
* Chrome Extension

# Bookmarklet
* Create New Bookmark and Name anything you want ( for e.g Medium Free Bookmarklet )
* In url add following code
  
  ```javascript
  javascript:(function(){
    if(window.location.hostname == "medium.com"){
        window.location.href = `https://medium-free.vercel.app/read?url=${window.location.href}`;
    }else{
        alert("Please make sure you're onto medium.com post/article.")
    }})();

* Visit Medium's Article and On Adress Bar Search For Bookmark Name ( for e.g Medium Free Bookmarklet )
* You'll be redirected to url without paywall

# Chrome Extension 
1. Download Zip from Releases ( Source Code Zip )
2. Add into chrome extension 
3. Visit Medium Article
4. Summon Medium Free Extension
5. You'll be redirected to url without paywall
