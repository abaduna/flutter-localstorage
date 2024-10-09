import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int value = 0;
  @override
  void initState() {
    super.initState();
    _loadValue();
  }
  void _loadValue() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      value = prefs.getInt('value') ?? 0;
    });
  }
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Mi primera app Flutter'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                value.toString(),
                style: const TextStyle(fontSize: 24),
              ),
              ElevatedButton(
                onPressed: _changeValue,
                child: const Text('Incrementar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
  void _changeValue() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    
    setState(() {
      
      value++;
      prefs.setInt('value', value);
    });
  }
}
