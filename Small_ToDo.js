var data = []

function render() {
  clearItem()
  var ul = document.querySelector('.list')
  for (var i = 0; i < data.length; i++) {
    var listItem = createListItem(data[i], i)

    ul.appendChild(listItem)
  }
}
render()

function clearItem() {
  var clear = document.querySelector('.list')
  clear.innerHTML = ''
}

var input = document.querySelector('.input>input')
input.onkeypress = function (event) {
  if (event.keyCode === 13 && input.value != '') {
    if (input.value === 'clear') {
      data = []
      render()
      return
    }
    var listItem = {
      title: input.value,
      isComplete: false,
    }
    data.push(listItem)
    input.value = ''
    render()
  }
}

function createCheckbox(item) {
  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = item.isComplete
  checkbox.onchange = function () {
    item.isComplete = this.checked
    render()
  }
  return checkbox
}

function delItemFromArray(index) {
  data.splice(index, 1)
}

function createCloseBtn(index) {
  var closeBtn = document.createElement('button')
  closeBtn.classList.add('close')
  closeBtn.innerHTML = '&times;'
  closeBtn.onclick = function () {
    delItemFromArray(index)
    // re-render
    render()
  }
  return closeBtn
}

function createText(item) {
  var text = document.createElement('span')
  if (item.isComplete) {
    text.classList.add('complete')
  }
  text.innerText = item.title
  return text
}

function createLabel(item) {
  var label = document.createElement('label')
  var checkbox = createCheckbox(item)
  var text = createText(item)
  label.appendChild(checkbox)
  label.appendChild(text)
  return label
}

function createListItem(item, index) {
  var listItem = document.createElement('li')
  listItem.classList.add('list-item')
  var label = createLabel(item)
  var closeBtn = createCloseBtn(index)
  listItem.appendChild(label)
  listItem.appendChild(closeBtn)
  return listItem
}

var clearBtn = document.querySelector('.clear')
clearBtn.onclick = function () {
  data = []
  render()
}

var addBtn = document.querySelector('.add')
addBtn.onclick = function () {
  if (input.value != '') {
    if (input.value === 'clear') {
      data = []
      render()
      return
    }
    var listItem = {
      title: input.value,
      isComplete: false,
    }
    data.push(listItem)
    input.value = ''
    render()
  }
}
