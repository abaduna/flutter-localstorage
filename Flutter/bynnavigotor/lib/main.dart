import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);



  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  double _width = 100.0;
  double _height = 100.0;
  Color _color = const Color.fromARGB(255, 205, 243, 33);
  BorderRadiusGeometry _borderRadius = BorderRadius.circular(10.0);
  void _change(){
    final random = Random();
    setState(() {
      _width =  random.nextInt(350).toDouble();
      _height = random.nextInt(350).toDouble();
      _color = Color.fromARGB(255, random.nextInt(256), random.nextInt(256), 1);
      _borderRadius = BorderRadius.circular(random.nextInt(100).toDouble());
    });
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Animatedcontainer'),
        ),
        body: Column(
          
          children: [
            Expanded(
              child: Center(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 600),
                  curve: Curves.fastOutSlowIn,
                  width: _width,
                  height: _height,
                  
                  decoration: BoxDecoration(
                    borderRadius: _borderRadius,
                    color: _color,
                  ),
                ),
              ),
            ),
            ElevatedButton(
              onPressed:  _change,
              child: const Text('Change'),
            )
          ],
        ),
      ),
    );
  }
}