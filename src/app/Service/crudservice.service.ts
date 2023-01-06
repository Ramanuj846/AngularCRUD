import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) { }

  getAllMensRecord():Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:3000/mens');
 }

 postMenRecord(data:any):Observable<any[]>
 {
  return this.http.post<any[]>('http://127.0.0.1:3000/mens',data)
 }

 updateMensRecord(data:any,id:number)
 {
  return this.http.patch<any[]>('http://127.0.0.1:3000/mens/'+ id,data)
 }

 deleteMensRecord(id:number)
 {
  return this.http.delete<any[]>('http://127.0.0.1:3000/mens/'+ id)
 }
}
