import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:nombre_de_tu_proyecto/models/Gif.dart';
import 'package:http/http.dart' as http;
void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
 late Future<List<Gif>> _listaGifs;
  
  Future<List<Gif>> _getGifs() async {
    final response = await http.get(Uri.parse('https://api.giphy.com/v1/gifs/trending?api_key=fs1NaSCI0LIwLx5Msmgol7yA1DRzrpoP&limit=10&rating=g'));
    
    if (response.statusCode == 200) {
      String body = utf8.decode(response.bodyBytes);
      final jsonData = jsonDecode(body);

      List<Gif> gifs = [];
      for (var gif in jsonData['data']) {
        gifs.add(Gif(gif['title'], gif['images']['downsized']['url']));
      }
      return gifs;
    } else {
      throw Exception('Failed to load gifs');
    }
  }
@override
  void initState() {
    super.initState();
   _listaGifs= _getGifs();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Lista de Personas'),
        ),
        body:FutureBuilder<List<Gif>>(
          future: _listaGifs,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
 
             return ListView(
              children: _listGifs(snapshot.data!),
             );
          }else if (snapshot.hasError){
            return Text('error');
          }
          return Center(child: CircularProgressIndicator());
          },
        ),
      ),
    );
  }
 List<Widget> _listGifs(List<Gif> data){
   return data.map((gif) => Card(
      child: Column(
        children: [
          Image.network(gif.url),
          Text(gif.nombre),
        ],
      ),
    )).toList();
 }

}