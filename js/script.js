/**
 * Descrizione
 * Riproduciamo con l'ausilio di jQuery il dropdown menu del sito: https://www.revolut.com/en-IT/
 */
$(document).ready(function() {

    /**
     * Dropdown menu
     */

    var dropDown = $('.whit-dropdown');
    var dropLink = dropDown.children('a');
    var dropMenu = dropDown.children('.dropdown-menu');
 
    // Click per mostrare e nascondere il sottomenu associato
    dropLink.click(function() {

        var actualMenu = $(this).next('.dropdown-menu');

        // Reset
        dropMenu.not(actualMenu).hide();
        
        // Apertura / chiusura dei menu
        actualMenu.toggle();
    });
});