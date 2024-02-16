

    let bestillinger = []; // Array to store Bestilling objects


    // Constructor function for creating Bestilling objects
    function Bestilling(film, antall, fornavn, etternavn, telefonnr, epost) {
    this.id = clickCounter; // Unique identifier
    this.film = film;
    this.antall = antall;
    this.fornavn = fornavn;
    this.etternavn = etternavn;
    this.telefonnr = telefonnr;
    this.epost = epost;
}



    let film;
    let antall;
    let fornavn;
    let etternavn;
    let telefonnr;
    let epost;
    let clickCounter = 0;
    const tableRowText = "tablerow";
    const knappFjernTekst = "Fjern";

    $("#Kjopknapp").click(function() {

    film = $('#nedfallMeny').val();
    antall = $('#AntallID').val();
    fornavn = $('#FornavnID').val();
    etternavn= $("#EtternavnID").val();
    telefonnr = $('#TelefonnrID').val();
    epost = $('#EpostID').val();

    let bestilling = new Bestilling(film, antall, fornavn, etternavn, telefonnr, epost);

    bestillinger.push(bestilling);

    if (epost === "" || /^.+@.+\..+$/.test(epost) === false) {
    alert("Skriv inn en gyldig epost, du glemte muligens '@' eller '.' i epostadressen din.");
    return;
}

    if(telefonnr === "" || isNaN(telefonnr) === true || telefonnr.length !== 8){
    alert("Telefonnummeret var enten ikke skrevet inn, hadde tegn eller bokstaver i seg, eller var ikke 8 siffere, prøv igjen.");
    return;
}

    if(etternavn === "" || isNaN(etternavn) === false){
    alert("Det var ikke skrevet inn ett etternavn, skriv inn ett etternavn.");
    return;
}

    if(fornavn === "" || isNaN(fornavn) === false){
    alert("Fornavnet var ikke skrevet inn, skriv inn ett fornavn.");
    return;
}

    if(antall === "" || isNaN(antall) === true){
    alert("Bilettantall var ikke valgt, skriv inn ett antall.");
    return;
}

    if(film === ""){
    alert("Det var ingen film valgt, velg en film.");
    return;
}



    $("#biletterKjopt").append(
    `<tr id='${tableRowText}${bestilling.id}'>` + "<td>" +
    `BILETT-ID: ${bestilling.id}` + "</td>" + "<td>" +
    `Film: ${bestilling.film} ` + "</td>" + "<td>" +
    `Antall: ${bestilling.antall}` +"</td>" + "<td>" +
    `Fornavn: ${bestilling.fornavn}` +"</td>" + "<td>" +
    `Etternavn: ${bestilling.etternavn} ` + "</td>" + "<td>" +
    `Telefonnr: ${bestilling.telefonnr}` +"</td>" + "<td>" +
    `Epost: ${bestilling.epost}` +"</td>" +
    `<td><button id="${knappFjernTekst}${bestilling.id}">
        Fjern</button></td>` +
    "</tr><br>")

    $('#nedfallMeny').val('');
    $('#AntallID').val('');
    $('#FornavnID').val('');
    $("#EtternavnID").val('');
    $('#TelefonnrID').val('');
    $('#EpostID').val('');

    clickCounter++
});

    $("#Slettknapp").click (function() {
    $("#biletterKjopt").empty();
});

    $("#biletterKjopt").on("click", "button", function() {
    var rowId = $(this).closest("tr").attr("id");
    $("#"+`${rowId}`).remove();
});