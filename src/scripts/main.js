'use strict';

const headerBody = document.querySelector('thead').querySelectorAll('tr');

const tableBody = document.querySelector('tbody').querySelectorAll('tr');

const tableFoot = document.querySelector('tfoot').querySelectorAll('tr');

function insertNode(nodeList) {
  for (const nodeTr of nodeList) {
    const rowList = nodeTr.querySelectorAll('td').length > 0
      ? nodeTr.querySelectorAll('td')
      : nodeTr.querySelectorAll('th');

    rowList[0].parentNode.insertBefore(rowList[1]
      .cloneNode(true), rowList[rowList.length - 1]);
  }
}

insertNode(tableBody);
insertNode(headerBody);
insertNode(tableFoot);
