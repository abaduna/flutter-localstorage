import 'package:flutter/material.dart';

class PageStateFull extends StatefulWidget {
  final String texto;
  const PageStateFull({super.key, required this.texto});
  @override
  State<PageStateFull> createState() => _PageStateFullState();
}

class _PageStateFullState extends State<PageStateFull> {
  @override
  Widget build(BuildContext context) {
    // TODO: implementar el método build
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pagina StateFull'),
      ),
      body: Center(
        child: Text(widget.texto.toString()),
      ),
    );
  }
}
