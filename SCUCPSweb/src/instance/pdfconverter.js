import pdf2html from "pdf2html";

export function convertPdf2Html(pdf){
    var html = '';
   if(pdf){
     html = pdf2html.html(pdf);
     console.log("html = " + html)
   }

}