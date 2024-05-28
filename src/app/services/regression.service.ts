import { Injectable } from '@angular/core';
import * as math from 'mathjs';
import { DataPoint } from '../data/DataPoint';
@Injectable({
  providedIn: 'root'
})
export class RegressionService {

  constructor() { }

  trainAIPolynomialModel(list: DataPoint[], degree:number){
    // w = (XT.X)^-1 XT y 
    let X = this.buildXMathMatrix(list,degree);
    let y = this.buildYVector(list);
    let XT = math.transpose(X);
    let XTX = math.multiply(XT,X);
    let XTXinv = math.inv(XTX); // Not all matrices are invertible <-- could lead into an error
    let XTXinvXT = math.multiply(XTXinv,XT);
    let w = math.multiply(XTXinvXT,y);
    return w; 
  }
  trainAILinearModel(list: DataPoint[]){
    return this.trainAIPolynomialModel(list,1);
  }
  predict(x: number, w: any){
    let X = new Array<number>();      // w = 4, w0, w1, w2, w3 
    X.push(1);
    X.push(x);
    let testXMatrix = math.matrix(X);
    for(let i = 2; i <= w.size()[0]-1; i++)
      X.push(x ** i);
    let mathJSXMatrix = math.matrix(X);
    let y = math.multiply(mathJSXMatrix,w);
    return y; 
  }
  predictAllPoints(list: DataPoint[],w:any){
    let predictedPoints: DataPoint[] = new Array<DataPoint>();
    let minX = list[0].x;
    let maxX = list[0].x;
    for( let i = 0 ; i < list.length; i++)
    {
     if(list[i].x < minX)
      minX = list[i].x;
     if(list[i].x > maxX)
      maxX = list[i].x;
    }
    for(let x = minX; x <= maxX; x+=0.1)
    {
      let y_w:any = this.predict(x,w);
      predictedPoints.push( new DataPoint(x,y_w));
    }
    return predictedPoints;
  }
  buildYVector(list: DataPoint[]){
    let vector = Array<number>(); // a vector as in a list of numbers - object - single row
    for (let i = 0 ; i < list.length; i++)
      vector.push(list[i].y);
    return math.matrix(vector);
  }
  buildXMathMatrix(list: DataPoint[], degree:number){
    let matrix: Array<number>[] = []; // a matrix (a list of rows)
    for( let i = 0 ; i < list.length; i++)
      {
        let row = new Array<number>();
        row.push(1);
        row.push(list[i].x);
        for(let j = 2; j <= degree; j++)
          row.push(list[i].x ** j)
        matrix.push(row);
      }
      return math.matrix(matrix);
  }
}
