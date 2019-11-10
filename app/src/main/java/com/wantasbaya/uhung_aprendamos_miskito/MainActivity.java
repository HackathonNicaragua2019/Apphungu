package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.appcompat.app.AppCompatActivity;


import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.WindowManager;

import android.content.Intent;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    private Button btnCrearCuenta, IniciarSesion;
    private TextView portada;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);


        btnCrearCuenta = (Button) findViewById(R.id.btn_registro);
        IniciarSesion = (Button) findViewById(R.id.btn_Sesion);

        portada = (TextView) findViewById(R.id.textView2);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");

        portada.setTypeface(custom_font);

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
