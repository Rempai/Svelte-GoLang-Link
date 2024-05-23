<script lang="ts">
	let file: File | null = null;

	async function uploadFile(): Promise<void> {
		if (!file) {
			alert('Please select a file first');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('http://localhost:8080/upload', {
				// Change the URL to your backend endpoint
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('File upload failed');
			}

			// Handle successful response
		} catch (error) {
			console.error('Error:', error);
			alert('Error uploading file');
		}
	}

	function handleFileChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		file = target.files ? target.files[0] : null;
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
