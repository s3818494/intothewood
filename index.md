<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="./script.js"></script>



        
    </head>

    <body>

        <div class="night"> 
        </div>

        <div class="day">
        </div>

        <div class="white-bg">
        </div>

        <div class="black-bg">
            <div id="text6">
                Trees and forests are important for our environment and essential natural resources. <br>
                Save trees, save the Earth.
            </div>

            <div id="refresh">
                <div id="refresh_btn">
                    <span class="glyphicon glyphicon-repeat"></span>
                </div>
                <img src="9.png" id="top_arrow">
                Restart
            </div>
            <div id="mixkit">
                Sound Effects by Mixkit.co
            </div>
        </div>

        <div class="responsive-bg">
            <div id="text7">
                Whoops! Screen less than 1025px wide is not supported. <br> Please comeback on a laptop to experience our website.
            </div>
        </div>

            <img src="7.png" id="title1">

            <img src="8.png" id="title2">



            <div id="inst">
                Scroll to navigate
            </div>



            <div id="contrast"> 
                <i class="fa fa-low-vision"></i>
                High Contrast
            </div>




            <img src="6.png" id="ground">

                <img src="1.png" id="tree1">
            
                <img src="2.png" id="tree2">
                    <div id="text2">
                        "A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people." <br> <p> ― Franklin D. Roosevelt </p>
                    </div>
                
                <img src="3.png" id="tree3">
                    <div id="text3">
                        "The trees encountered on a country stroll <br>
                        Reveal a lot about that country’s soul… <br>
                        A culture is no better than its woods." <br> <p>― W. H. Auden</p>
                    </div>
            
                <img src="4.png" id="tree4">
                    <div id="text4">
                        "To be without trees would, in the most literal way, to be without our roots." <br> <p>― Richard Mabey</p>


                    </div>
                
            
                <img src="5.png" id="tree5">
                    <div id="text5">
                        "He who plants a tree <br> Plants a hope." <br> <p>― Lucy Larcom</p>
                    </div>



            <audio id="night" loop>
                <source src="night.mp3" type="audio/mpeg">
            </audio>

            <div id="night_audio">
                <button onclick="playNightAudio()" type="button" id="play_night">
                    <span class="glyphicon glyphicon-play"></span>
                    Play Audio
                </button>

                <button onclick="pauseNightAudio()" type="button" id="pause_night">
                    <span class="glyphicon glyphicon-pause"></span>
                    Pause Audio
                </button>
            </div>


            <audio id="day" loop>
                <source src="day.mp3" type="audio/mpeg">
            </audio>

            <div id="day_audio">
                <button onclick="playDayAudio()" type="button" id="play_day">
                    <span class="glyphicon glyphicon-play"></span>
                    Play Audio
                </button>

                <button onclick="pauseDayAudio()" type="button" id="pause_day">
                    <span class="glyphicon glyphicon-pause"></span>
                    Pause Audio
                </button>
            </div>

    
    
    
    <script>
        var x = document.getElementById("night");
        var y = document.getElementById("day");

            function playNightAudio() {
                x.play();
            }

            function pauseNightAudio() {
                x.pause();
            }

            function playDayAudio() {
                y.play();
            }

            function pauseDayAudio() {
                y.pause();
            }


        document.getElementById("top").addEventListener("click", backToTop);

        function backToTop() {
             window.location.reload("Refresh");
        }

    </script>


        

    </body>

</html>
