package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.WindowManager;
import android.widget.TextView;

public class MenuPrincipal extends AppCompatActivity {

    TextView lema,cursos,oferta;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_principal);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        lema = (TextView)findViewById(R.id.nombreus);
        cursos = (TextView)findViewById(R.id.cursos);
        oferta = (TextView)findViewById(R.id.oferta);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");

        lema.setTypeface(custom_font);
        cursos.setTypeface(custom_font);
        oferta.setTypeface(custom_font);

    }
}
