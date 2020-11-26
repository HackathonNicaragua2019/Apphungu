package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

public class cultura extends AppCompatActivity {

    private TextView vidinter, galeria,  doctdigi, imageinter,txtmapas;
    TextView lemas;

    ConstraintLayout layimginter,constraintLayout3,laydic,lay1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cultura);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        lemas = (TextView)findViewById(R.id.textlema);

        vidinter = (TextView)findViewById(R.id.vidinter);
        galeria = (TextView)findViewById(R.id.galeria);
        doctdigi = (TextView)findViewById(R.id.doctdigi);
        imageinter = (TextView)findViewById(R.id.imageinter);
        txtmapas = (TextView)findViewById(R.id.txtmapas);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");
        lemas.setTypeface(custom_font);
        galeria.setTypeface(custom_font);
        doctdigi.setTypeface(custom_font);
        imageinter.setTypeface(custom_font);
        vidinter.setTypeface(custom_font);
        txtmapas.setTypeface(custom_font);

        layimginter = (ConstraintLayout) findViewById(R.id.layimginter);
        constraintLayout3 = (ConstraintLayout) findViewById(R.id.constraintLayout3);
        laydic= (ConstraintLayout) findViewById(R.id.laydic);
        lay1= (ConstraintLayout) findViewById(R.id.lay1);

        layimginter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(cultura.this,img_inteactive.class));
            }
        });

        constraintLayout3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(cultura.this,galeria_interactiva.class));
            }
        });
        laydic.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(cultura.this,pdfinteractive.class));
            }
        });
        lay1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(cultura.this,Video_interactivo.class));
            }
        });

    }
}
