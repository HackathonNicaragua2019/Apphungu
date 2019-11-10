package com.wantasbaya.uhung_aprendamos_miskito;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.Typeface;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.FirebaseApp;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;
import com.google.firebase.database.ValueEventListener;
import com.wantasbaya.uhung_aprendamos_miskito.Models.palabras;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class traductor extends AppCompatActivity {

    TextView lema;
    TextView entrada, traduccion;
    ImageView mic;
    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;
    String trad;

    private List<palabras> listapalabras = new ArrayList<palabras>();
    ArrayAdapter<palabras> arrayAdapterPalabra;

    private static final int REC_CODE_SPEECH_INPUT = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_traductor);

        this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        getSupportActionBar().hide();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        entrada = (TextView) findViewById(R.id.entrada);
        mic = (ImageView) findViewById(R.id.btn_mic);
        traduccion = (TextView) findViewById(R.id.traduccion);

        inciarfirebase();





        lema = (TextView)findViewById(R.id.traductor);

        Typeface custom_font = Typeface.createFromAsset(getAssets(),  "fonts/PhosphateSolid.ttf");

        lema.setTypeface(custom_font);


        mic.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                iniciarVoz();


            }
        });




    }





    private void iniciarVoz(){

        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);

        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT,"Hola, dime algo");




        try {
            startActivityForResult(intent,REC_CODE_SPEECH_INPUT);
        }catch (ActivityNotFoundException e){

        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode){
            case REC_CODE_SPEECH_INPUT:{
                if (resultCode == RESULT_OK && null != data){
                    ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    entrada.setText(result.get(0));

                    if(entrada.getText().equals("abeja")){
                        traduccion.setText("nasma yula sâtka");
                    }else if(entrada.getText().equals("absoluto")){
                        traduccion.setText("aiska");
                    }else if (entrada.getText().equals("abundar")){
                        traduccion.setText("irwaia");
                    }else if (entrada.getText().equals("acceso")){
                        traduccion.setText("bal taki");
                    }else if (entrada.getText().equals("acechar")){
                        traduccion.setText("aiwahkaia");
                    }else if (entrada.getText().equals("adivinanza")){
                        traduccion.setText("luki sakanka");
                    }else if (entrada.getText().equals("aeropuerto")){
                        traduccion.setText("plen");
                    }else if (entrada.getText().equals("alegrarse")){
                        traduccion.setText("lilia takaia");
                    }else if (entrada.getText().equals("amapola")){
                        traduccion.setText("tangni sâtka");
                    }else{
                        traduccion.setText("Palabra no encontrada");
                    }


                }
                break;
            }
        }
    }

    public void inciarfirebase(){
        FirebaseApp.initializeApp(this);
        firebaseDatabase = FirebaseDatabase.getInstance();
        databaseReference = firebaseDatabase.getReference();
    }
}
