import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  final List<Persona> _personas = [
    Persona('Juan Perez', 30, 'juanperez@gmail.com', '555-1234', 'Calle 123'),
    Persona('Maria Gomez', 25, 'mariagomez@gmail.com', '555-5678', 'Calle 456'),
    Persona('Pedro Ramirez', 40, 'pedroramirez@gmail.com', '555-9101', 'Calle 789'),
  ];

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Mi Aplicación'),
        ),
        body: ListView.builder(
          itemCount: widget._personas.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(widget._personas[index].nombre),
              subtitle: Text(widget._personas[index].edad.toString()),
              leading: CircleAvatar(
                child: Text(widget._personas[index].nombre[0]),
              ),
              trailing: Icon(Icons.arrow_forward_ios),
              onLongPress: () {
                _borrarPersona(context, index);
              },
            );
          },
        ),
      ),
    );
  }

  void _borrarPersona(BuildContext contexto, int index) {
    showDialog(
      context: contexto,
      builder: (context) => AlertDialog(
        title: Text('Borrar Persona'),
        content: Text('¿Estás seguro de que deseas borrar a ${widget._personas[index].nombre}?'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: Text('Cancelar'),
          ),
          TextButton(
            onPressed: () {
              setState(() {
                widget._personas.removeAt(index);
              });
              Navigator.of(context).pop();
            },
            child: Text('Borrar'),
          ),
        ],
      ),
    );
  }
}

class Persona {
  String nombre;
  int edad;
  String email;
  String telefono;
  String direccion;

  Persona(this.nombre, this.edad, this.email, this.telefono, this.direccion);
}

