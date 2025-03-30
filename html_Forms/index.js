document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        age: formData.get('age'),
        description: formData.get('description'),
        recomendation: formData.get('radio'),
        languages: Array.from(document.querySelectorAll('.check-options:checked')).map(option => option.value)
    };
    console.log('Form Data:', data);
    alert('Formulario enviado correctamente.');
        }
    );  