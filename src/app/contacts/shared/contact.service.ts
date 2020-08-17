import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private toastr: ToastrService) {

  }

  getContacts(): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts`);
  }
  findContactById(id: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?id=${id}`);
  }
  findContactByCountry(country: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?country=${country}`);
  }
  findContactByLocation(location: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?location=${location}`);
  }
  findContactByName(name: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?name=${name}`);
  }
  findContactByIdea(idea: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?idea=${idea}`);
  }
  findContactByEmail(email: string): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${this.SERVER_URL}/contacts?email=${email}`);
  }

  addContact(contact: IContact): Observable<IContact> {
    return this.httpClient.post<IContact>(`${this.SERVER_URL}/contacts`, contact);
  }

  removeContact(name: string) {
    return this.httpClient.delete<string>(`${this.SERVER_URL}/contacts/${name}`).subscribe();
  }
}
