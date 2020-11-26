package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class diccionario extends AppCompatActivity {

    TextView cuandrotexto;


    EditText edit_palabra;
    Button btnBuscar;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_diccionario);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        cuandrotexto = (TextView)findViewById(R.id.cuandrotexto);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");

        cuandrotexto.setTypeface(custom_font);


        edit_palabra = (EditText) findViewById(R.id.edit_palabra);
        btnBuscar = (Button) findViewById(R.id.btnBuscar);
        cuandrotexto = (TextView) findViewById(R.id.cuandrotexto);


        btnBuscar.setOnClickListener(new View.OnClickListener() {
            @Override


            public void onClick(View v) {

                if (edit_palabra.getText().equals("tahpla")){

                    cuandrotexto.setText("[sabor] Que es como el de algunas infusiones de hierbas, las almendras verdes o el cacao puro, en especial se dice cuando este sabor resulta desagradable.");

                }else{
                    cuandrotexto.setText("asdasdasdasdasdasdasdasd");
                }

            }
        });

    }
}
