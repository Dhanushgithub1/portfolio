<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3Hj164U5ivTk4jSu5HJeW3lvugfzlpWWMrXzlGDXUrdjlFgalZSlINcZ89a8q2ef7A/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  </script>