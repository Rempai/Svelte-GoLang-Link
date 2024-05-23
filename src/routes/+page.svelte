<script>
	let file = null;

	async function uploadFile() {
		if (!file) {
			alert('Please select a file first');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('http://localhost:8080/upload', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('File upload failed');
			}

			const filename = file.name.replace(/\.dem$/, '') + '.csv'; // Use the uploaded file's name
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error('Error:', error);
			alert('Error uploading file');
		}
	}

	function handleFileChange(event) {
		const input = event.target;
		if (!input.files) return;
		file = input.files[0];
	}

</script>

<div class="upload-container">
	<h1>Upload .dem File</h1>
	<input type="file" on:change={handleFileChange} accept=".dem" />
	<button on:click={uploadFile}>Upload</button>
</div>

<style>
	.upload-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.upload-container input {
		margin: 20px 0;
	}
</style>
