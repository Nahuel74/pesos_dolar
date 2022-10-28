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
            background-color: white;
            font-family: 'Montserrat', sans-serif;
            color: black;
        
            margin-top: 5em;
        }

        .container-column{
            display: flex;
            flex-flow: column;
            align-items: center;

            margin: 0 1em;
        }

        .container-row {
            display: flex;
            flex-flow: row;
            justify-content: space-around;
        }

        h2 {
            margin: 0;
        }

        h3 {
            margin: 0.5em;
        }

        p {
            text-align: center;
        }
        
        button {
            margin: 0.5em;
        }
    </style>
</head>
<body>
    <div class="container-row">
        <div class="container-column">
            <div class="container-row">
                <h2 id = "compra">
                    <?php
                        require_once "partials/scrap-function.php";
                        buying();
                    ?>
                    <h2>&nbsp;ARS</h2>
                </h2>
                </div>
                <h3>Compra</h3>
        </div>
        <div class="container-column">
            <div class="container-row">
                <h2 id = "venta">
                    <?php
                        require_once "partials/scrap-function.php";
                        selling();
                    ?>
                    <h2>&nbsp;ARS</h2>
                </h2>
            </div>
            <h3>Venta</h3>
        </div>
    </div>
    <div>
        <div class="container-row">
        <div class="container-column">
                <p>Dólar blue a Pesos</p>
                <input type="number" id="input-dollars">
                <button id="button-buy" type="button">Calcular</button>
            </div>
            <div class="container-column">
                <p>Pesos a Dólar Blue</p>
                <input type="number" id="input-pesos">
                <button id="button-sell" type="button">Calcular</button>
            </div>
        </div>
    </div>          

    <script type="text/javascript" src="js/calc.js"></script>
</body>
</html>