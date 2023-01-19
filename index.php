<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DolarARG</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>

        <thead>
            <tr>
                <th colspan="2">Dólar Oficial</th>
                <th colspan="2">Dólar Blue</th>
                <th>Dólar 'Solidario'</th>
                <th>Pesos (Steam, compras al exterior, etc.)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Compra</td>
                <td>Venta</td>
                <td>Compra</td>
                <td>Venta</td>
                <td>Venta</td>
                <td>Compra</td>
            </tr>
            <tr> 
                
            <!-- 
                Dolar[x]:
                0: Blue Compra
                1: Blue Venta
                2: Blue Compra
                3: Blue Venta
                4: Oficial Compra
                5: Oficial Venta
                6: Bolsa Compra
                7: Bolsa Venta
                8: CCL Compra
                9: CCL Venta
                10: Cripto Compra
                11: Cripto Venta
                12: Solidario
            -->
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo $dolar[4] . ' ARS';
                    ?>
                </td>
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo $dolar[5] . ' ARS';
                    ?>
                </td>
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo $dolar[0] . ' ARS';
                    ?>
                </td>
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo $dolar[1] . ' ARS';
                    ?>
                </td>
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo $dolar[12] . ' ARS';
                    ?>
                </td>                
                <td class='values'>
                    <?php 
                        require_once 'partials/scrap-function.php';
                        $dolar = dolarHoy();
                        echo '75% (o 100%)';
                    ?> 
                </td>
            </tr>
            <tr>
                <td> <input type='number' min='0' placeholder='Dolar Oficial a Pesos' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos  a Dolar Oficial' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Dolar Blue a Pesos' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Dolar Blue' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Dolar "Solidario"' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Pesos' class='inputs'></td>
            </tr>
            <tr>
                <td colspan='6'> <button id='clear'> Ø </button> <button id="button"> = </button> </td>
            </tr>
            <tr>
               <td colspan='6' id='td-result'></td> 
            </tr>
        </tbody>
    </table>

    <script type="text/javascript" src="js/calc.js"></script>
    <script type="text/javascript" src="js/print.js"></script>
</body>
</html>