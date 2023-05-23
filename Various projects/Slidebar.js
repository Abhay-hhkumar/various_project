<!DOCTYPE html>
<html>
<head>
  <title>Radio Input Example</title>

  <style>

    *{margin:0;padding:0;box-sizing:border-box;


    }

    #toggle{position:fixed;top:20px;right:20px;width:60px;height:60px;background:red;display:flex;justify-content:center;align-items:center;}

    #toggle::before{
      content:'';
      position:absolute;width:28px;height:2px;background:green;
      transform:translateY(5px);
      transition:0.2s;
    }
    #toggle::after{
      content:'';
      position:absolute;width:28px;height:2px;background:green;
      transform:translateY(-5px);
      transition:0.2s;
    }

    #toggle.active::before{transform:translateY(0px) rotate(45deg);}
    #toggle.active::after{transform:translateY(0px) rotate(-45deg);;}

    #slidebar{
      position:fixed;
      top:0;
      left:-300px;
      width:300px;
      height:100vh;
      background:brown;
      transition:0.5s;
    }
    #slidebar.active{left:0px;}
    #slidebar ul{position:relative;margin-top:50px;}
    #slidebar ul li{ list-style:none;display: inline-block;width:100%;padding:10px 40px; }
    #slidebar ul li:hover{background:green;}
    #slidebar ul li a{color:white;text-decoration:none;font-size:1.5rem;}


  </style>
</head>
<body>
  <div id="toggle"></div>
  <div id="slidebar">
    
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">home</a></li>
      <li><a href="#">home</a></li>
      <li><a href="#">home</a></li>
    </ul>
  </div>

  
  <script>

    const toggle= document.getElementById('toggle');
    const slider = document.getElementById('slidebar');

    document.onclick=function(e){
      if(e.target.id !== 'slidebar' && e.target.id !== 'toggle'){

 toggle.classList.remove('active');slider.classList.remove('active');
      }
    }

      toggle.onclick=function(){
      toggle.classList.toggle('active');slider.classList.toggle('active');
     
    }
   
    
  </script>
</body>
</html>
