<?php 
    function dolarHoy(){
        $url = file_get_contents("https://dolarhoy.com/cotizaciondolarblue");

        $dom = new DOMDocument();
        @$dom -> loadHTML($url);
    
        $divs = $dom -> getElementsByTagName("div");
    
        foreach ($divs as $div) {
            if ($div -> getAttribute("class") === "value") {
                $dolar = $div -> nodeValue;
                $dolar = str_replace("$", "", $dolar);
                $dolar = floatval($dolar);
            }
        }
        return $dolar;
    }
?>