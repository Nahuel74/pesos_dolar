<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        
        body {
            background-color: black;
            font-family: 'Montserrat', sans-serif;
            color: white;
        }

        #container{
            display: flex;
            flex-flow: column;
            align-items: center;

            margin-top: 10%;
        }

        #container-title{
            display: inline;
        }
    </style>
</head>
<body>
    <div id="container">
        <div id="container-title">
            <h2 style="display: inline">El Dólar Blue cuesta: ARS
                <h2 style="display: inline" id = "dolar">
                    <?php
                        require "partials/scrap-function.php";
                        echo dolarHoy();
                    ?> 
                </h2> 
            </h2>
        </div>
        <div> 
            <p>Convertí tus pesos a Dólar Blue</p>
            <input type="number" id="pesos">
            <button id="button" type="button">Calcular</button>
        </div>
    </div>

<script type="text/javascript" src="js/calc.js"></script>
</body>
</html>