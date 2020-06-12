document.addEventListener('turbolinks:load', () => {
    document.addEventListener('ajax.success', function(data) {
        var post = data.detail
        console.log(post)
    })
})