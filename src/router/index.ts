import { Router, Request, Response, json, NextFunction } from 'express'
// import {
//   allPhoto,
//   deletePhoto,
//   insertPhoto,
//   onePhoto,
//   updatePhoto,
// } from '../lib/Photo.db'
import { UpdatePhotoType } from '../types/Photo.type'

export const indexRouter = Router()

// indexRouter.get('/all', async (req: Request, res: Response) => {
//   try {
//     const photos = await allPhoto()
//     res.json({
//       response: 200,
//       photos,
//     })
//   } catch (err) {
//     res.json({
//       response: 500,
//       message: err,
//     })
//   }
// })

// indexRouter.get('/:id', async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params.id)
//     const photo = await onePhoto(id)
//     res.json({
//       response: 200,
//       photo,
//     })
//   } catch (err) {
//     res.json({
//       response: 500,
//       message: err,
//     })
//   }
// })


indexRouter.get('/', function(req, res){
    res.end('hello, world');
});

indexRouter.get('/err', function(req, res){
    throw new Error("hoge")// hogeなんて変数はないのでエラー。
});

// エラーを扱うためのハンドラ
indexRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(404).send(err.message);
  });

indexRouter.get('*', async (req, res, next) => {
    next(new Error("Route not found"));
  });

indexRouter.use(function(err, req, res, next){
    res.status(500);
    res.end('my 500 error! : ' + err);
});