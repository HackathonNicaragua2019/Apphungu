package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.appcompat.app.AppCompatActivity;


import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.view.WindowManager;

import android.content.Intent;
import android.view.View;
import android.widget.Button;


public class MainActivity extends AppCompatActivity {

    private Button btnCrearCuenta, IniciarSesion;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);


        btnCrearCuenta = (Button) findViewById(R.id.btn_registro);
        IniciarSesion = (Button) findViewById(R.id.btn_Sesion);


        btnCrearCuenta.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,crear_cuenta.class));
            }
        });

        IniciarSesion.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,iniciar_sesion.class));
            }
        });
    }
}
