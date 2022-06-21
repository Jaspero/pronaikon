export const SHARED_CONFIG: {
	projectId: string,
	github: {
		organization: string,
		repository: string,
	},
  cloudRegion: 'us-central1' | 'us-east1' | 'us-east4' | 'europe-west1' | 'europe-west2' | 'asia-east2' | 'asia-northeast1';
	webUrl: string;
	adminEmail: string;
} = {
	github: {
		organization: 'Jaspero',
		repository: 'jms',
	},
	projectId: 'pronaikon-ea42a',
	cloudRegion: 'europe-west1',
	webUrl: 'https://pronaikon-ea42a.web.app',
	adminEmail: 'maloca.luka@gmail.com'
};
