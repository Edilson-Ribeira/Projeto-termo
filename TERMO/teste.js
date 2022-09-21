function CriaPDF() {
    var minhaTabela = document.getElementById('principal').innerHTML;
    var teste = document.getElementById('nome').innerText;
    
    // CRIA UM OBJETO WINDOW
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Laudo Tecnico</title>');   // <title> CABEÇALHO DO PDF.                                    // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela); 
    win.document.write(teste);                  // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');
    win.document.close(); 	                                         // FECHA A JANELA
    win.print();                                                            // IMPRIME O CONTEUDO
}