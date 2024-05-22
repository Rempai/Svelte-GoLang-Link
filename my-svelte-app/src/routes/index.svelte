<script>
    let data = '';

    const fetchData = async () => {
        const response = await fetch('/api/data');
        const result = await response.json();
        data = result.message;
    };

    fetchData();
</script>

<main>
    <h1>{data}</h1>
</main>
