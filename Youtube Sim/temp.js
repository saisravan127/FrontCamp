var tableData = [
    {
      'first_name': 'Russell',
      'last_name': 'Wilson',
      'rank': '1',
    },
    {
      'first_name': 'Matt',
      'last_name': 'Hasselbeck',
      'rank': '2',
    }
  ]



var state = {
  'querySet': tableData,
  'page':1,
  'rows':5,
}

buildTable()

function pagination(querySet, page, rows){
	var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    
    var trimmedData = querySet.slice(trimStart, trimEnd)
    
    var pages = Math.ceil(querySet.length /rows)
    
    return{
    	'querySet':trimmedData,
        'pages':pages
    }
}

function pageButtons(pages){
	var wrapper = document.getElementById('pagination-wrapper')
    wrapper.innerHTML = ''
    
    for (var page = 1; page <= pages; page ++){
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }
    
    $('.page').on('click', function(){
    	$('#table-body')
    })
    
}


function buildTable() {
    var table = $('#table-body')

    var data = pagination(state.querySet, state.page, state.perPage)
    var myList = data.querySet

    for (var i = 1 in myList) {
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${myList[i].rank}</td>
                  <td>${myList[i].first_name}</td>
                  <td>${myList[i].last_name}</td>
                  `
        table.append(row)
    }

    paginationButtons(data.pages, state.pagesWindow)
}
