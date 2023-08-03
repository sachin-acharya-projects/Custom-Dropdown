import "../css/style.scss"
import "../css/dropdown.scss"

// DOM selection
const input_box = $(".dropdown-display")
const search_box = $("#search-box")
const radio_input = $$("input[type='radio'")
const labels = $$("label")

input_box.addEventListener("click", () => {
    input_box.classList.toggle("open")

    let list = input_box.nextElementSibling

    if (list.style.maxHeight) {
        list.style.maxHeight = null
        list.style.boxShadow = null
    } else {
        list.style.maxHeight = list.scrollHeight + "px"
        list.style.boxShadow =
            "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)"
    }
})

radio_input.forEach(radio => {
    radio.addEventListener('change', () => {
        input_box.innerHTML = radio.nextElementSibling.innerHTML
        input_box.click()
    })
})

search_box.addEventListener('keyup', () => {
    search(search_box)
})

/**
 * 
 * @param {HTMLInputElement} searchin 
 */
function search(searchin) {
    let search_val = searchin.value
    search_val = search_val.toUpperCase()

    labels.forEach(label => {
        let check_val = label.querySelector('.name').innerHTML
        check_val = check_val.toUpperCase()
        if(check_val.indexOf(search_val) == -1) 
            label.style.display = 'none'
        else
            label.style.display = 'flex'
        let list = input_box.nextElementSibling
        list.style.maxHeight = list.scrollHeight + 'px'
    })
}

/**
 * Represents a function that selects an element using a CSS selector.
 * @callback SelectorFunction
 * @param {string} selector - The CSS selector to match the element(s).
 * @returns {Element|null|NodeList} The selected element(s) or null if no matches found.
 */

/**
 * Returns the first element that matches the specified CSS selector.
 * @type {SelectorFunction}
 */
function $(selector) {
    return document.querySelector(selector)
}

/**
 * Returns a list of elements that match the specified CSS selector.
 * @type {SelectorFunction}
 */
function $$(selector) {
    return document.querySelectorAll(selector)
}
