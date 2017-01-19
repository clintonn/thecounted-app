$(document).ready(() => {

  $('#counted-search-form').submit((event) => {
    event.preventDefault()
    $('#counted-search-form').css("visibility", "hidden")
    addAdvancedSearch($('select#option').val())
  })
  $('#advanced-search-form').submit((event) => {
    event.preventDefault()
    handleSearch()
  })

  function handleSearch() {
    let url = 'https://thecountedapi.com/api/counted?'
    let $param = $('select#option').val()
    let $value = $('select#advanced-option').val()
    url += $param + "=" + encodeURIComponent($value)
    makeAPICall(url)
  }

  function showResults(response) {
    $('.results-container').append('<p><h3>Results</h3></p>')
    response.forEach( (victim) => {
      $('.results-container').append(`<div class='profile-card'> <h3 class='name'>${victim.name}</h3> <table class='details'> <tr> <td class='dod'><strong>Date of Death: </strong>${victim.month}, ${victim.day}, ${victim.year}</td></tr><tr> <td class='location'><strong>Location of Death: </strong>${victim.city}, ${victim.state}</td></tr><tr> <td class='age'><strong>Age: </strong>${victim.age}</td></tr><tr> <td class='sex'><strong>Gender: </strong> ${victim.sex}</td></tr><tr> <td class='race'><strong>Race: </strong>${victim.race}</td></tr><tr> <td class='cause'><strong>Cause of Death: </strong>${victim.cause}</td></tr><tr> <td class='armed'><strong>Armed: </strong>${victim.armed}</td></tr></table></div>`)
    })
  }


  function makeAPICall(query) {
    $.ajax(
      { url: query, type: 'get', success: showResults})
  }

  function addYearOptions() {
    $('#advanced-search-form').append("<label for='advanced-option'>Year: </label><select id='advanced-option'><option value='2015'>2015</option><option value='2016'>2016</option></select><input type='submit' name='submit' />")
  }

  function addRaceOptions() {
    $('#advanced-search-form').append("<label for='advanced-option'>Race: </label><select id='advanced-option'><option value='White'>White</option><option value='Black'>Black</option><option value='Asian/Pacific Islander'>Asian/Pacific Islander</option><option value='Hispanic/Latino'>Hispanic/Latino</option><option value='Native American'>Native American</option></select><input type='submit' name='submit' />")
  }

  function addAdvancedSearch(option) {
    if (option == "year") {
      addYearOptions()
    } else if (option == "race") {
      addRaceOptions()
    } else {
      addStateOptions()
    }
  }

  function addStateOptions() {
    $('#advanced-search-form').append("<label for='advanced-option'><select id='advanced-option'><option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option><option value='DE'>Delaware</option><option value='DC'>District Of Columbia</option><option value='FL'>Florida</option><option value='GA'>Georgia</option><option value='HI'>Hawaii</option><option value='ID'>Idaho</option><option value='IL'>Illinois</option><option value='IN'>Indiana</option><option value='IA'>Iowa</option><option value='KS'>Kansas</option><option value='KY'>Kentucky</option><option value='LA'>Louisiana</option><option value='ME'>Maine</option><option value='MD'>Maryland</option><option value='MA'>Massachusetts</option><option value='MI'>Michigan</option><option value='MN'>Minnesota</option><option value='MS'>Mississippi</option><option value='MO'>Missouri</option><option value='MT'>Montana</option><option value='NE'>Nebraska</option><option value='NV'>Nevada</option><option value='NH'>New Hampshire</option><option value='NJ'>New Jersey</option><option value='NM'>New Mexico</option><option value='NY'>New York</option><option value='NC'>North Carolina</option><option value='ND'>North Dakota</option><option value='OH'>Ohio</option><option value='OK'>Oklahoma</option><option value='OR'>Oregon</option><option value='PA'>Pennsylvania</option><option value='RI'>Rhode Island</option><option value='SC'>South Carolina</option><option value='SD'>South Dakota</option><option value='TN'>Tennessee</option><option value='TX'>Texas</option><option value='UT'>Utah</option><option value='VT'>Vermont</option><option value='VA'>Virginia</option><option value='WA'>Washington</option><option value='WV'>West Virginia</option><option value='WI'>Wisconsin</option><option value='WY'>Wyoming</option></select><input type='submit' /></label>"
  )}
  })
