$(document).ready(function() {
    $("#form-tarefa").submit(function(e) {
        e.preventDefault();
        
        const nomeTarefa = $("#input-tarefa").val();
        
        const listItem = $("<li></li>").text(nomeTarefa);
        
        listItem.click(function() {
            $(this).toggleClass("completed");
        });
        
        $("#lista-tarefas").append(listItem);
        
        $("#input-tarefa").val("");
    });

    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
});