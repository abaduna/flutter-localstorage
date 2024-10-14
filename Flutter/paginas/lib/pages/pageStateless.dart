import 'package:flutter/material.dart';

class PageStateless extends StatelessWidget {
  final texto;
  const PageStateless({super.key, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pagina Stateless'),
      ),
      body:  Center(
        child: Text(texto.toString()),
      ),
    );
  }
}
