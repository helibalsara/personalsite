import { google, Auth } from 'googleapis';
import credentials from './credentials.json';

const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client: Auth.OAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const GMAIL_SCOPES: string[] = ['https://www.googleapis.com/auth/gmail.send'];

const url: string = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: GMAIL_SCOPES,
});

console.log('Authorize this app by visiting this url:', url);
