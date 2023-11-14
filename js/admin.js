$(document).ready(function(){
        
        $(".navbar-toggler").click(function(){
            if($(".esconder").hasClass("d-none")){
                $(".esconder").removeClass("d-none");
            }
            else{
                $(".esconder").addClass("d-none");
                $(".todos_menus").addClass("d-none");
                $("#form_menu").removeClass("d-none");
            }
        })
        $(".info").hide();
        $(".abrInfo .bi-chevron-double-up").click(()=>{
            $(".info").show();
        })
        $(".fechaInfo").click(()=>{
        $(".info").hide();
        })
        
        //BOTAO STOCK
        $("#bt_stock").click(function(){
            
            if(!$("#div_inicio").hasClass("d-none")){
                $("#bt_stock").text("Inicio");
                $("#div_inicio").addClass("d-none")
                $("#div_stock").removeClass("d-none");
                
            }else{
                $("#bt_stock").text("Stock");
                $("#div_inicio").removeClass("d-none");
                $("#div_stock").addClass("d-none");
            }
        })
        //BOTAO MENU ADMIN
        $(".bt_menu").click(function(){
            var valor = $(this).data('bt');
            switch(valor){
                case 0 :
                    $(".todos_menus").addClass("d-none");
                    $("#form_menu").removeClass("d-none");
                    break;
                case 1 :
                    $("#form_menu").addClass("d-none");
                    $("#form_alt_perfil").removeClass("d-none");
                    break;
                case 2 :
                    $("#form_menu").addClass("d-none");
                    $("#form_cad_funcionarios").removeClass("d-none");
                    break;
                case 3 :
                    $("#form_menu").addClass("d-none");
                    $("#form_historico_venda").removeClass("d-none");
                    break;
            }
        })
        //BOTAO CAIXA DE VENDA
        $("#bt_venda").click(function(){
            window.open("index.html","_self");
        })
        
})



