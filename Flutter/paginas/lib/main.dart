import 'package:flutter/material.dart';
import 'package:paginas/pages/pageStatuFull.dart';

import 'pages/pageStateless.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hola Mundo',
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  const Home({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    TextEditingController _texto = TextEditingController(text: "");
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mi primera app Flutter'),
      ),
      body: Column(
        children: [
          Container(
            padding: EdgeInsets.all(20),
            child: TextField(
              controller: _texto,
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Ingrese su nombre',
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => PageStateless(texto: _texto.text)),
              );
            },
            child: const Text('Enviar'),
          ),
           ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => PageStateFull(texto: _texto.text)),
              );
            },
            child: const Text('Enviar statefull'),
          ),
        ],
      ),
    );
  }
}