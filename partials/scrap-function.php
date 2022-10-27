<?php 
    function dolarHoy(){
        $url = file_get_contents("https://dolarhoy.com/cotizaciondolarblue");
        $dom = new DOMDocument();
        @$dom -> loadHTML($url);
        $divs = $dom -> getElementsByTagName("div");
        $i = 0;
        foreach ($divs as $div) {
            if ($div -> getAttribute("class") === "value") {
                $dolar[$i] = $div -> nodeValue;
                $dolar[$i] = str_replace("$", "", $dolar[$i]);
                $dolar[$i] = floatval($dolar[$i]);
                $i++;
            }
        }
        return $dolar;
    }

    function buying(){
        $dolar = dolarHoy();
        echo $dolar[0];
    }

    function selling(){
        $dolar = dolarHoy();
        echo $dolar[1];
    }
?>