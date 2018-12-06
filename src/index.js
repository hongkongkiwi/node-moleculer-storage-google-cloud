let Storage
let storage

module.exports = {

	name: "storage-google-cloud",

	/**
	 * Default settings
	 */
	settings: {
		serviceAccountFile: null,
		projectId: null
	},

	/**
	 * Actions
	 */
	actions: {
		async listFiles(ctx) {
			try {
				const [files] = await storage.bucket(ctx.params.bucketName).getFiles()
				return files
			} catch (err) {
				return Promise.reject(err)
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
		Storage = Storage || require("@google-cloud/storage").Storage
		storage = storage || new Storage({
			projectId: this.settings.projectId,
			keyFilename: this.settings.keyFilename
		})
	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
}
