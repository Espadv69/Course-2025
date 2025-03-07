package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class PracticaFormEvent extends JFrame implements ActionListener {

  private JButton btnAceptar, btnCancelar;

  public PracticaFormEvent() {
    setLayout(null);

    btnAceptar = new JButton("Aceptar");
    btnAceptar.setBounds(10, 10, 100, 30);
    add(btnAceptar);
    btnAceptar.addActionListener(this);

    btnCancelar = new JButton("Cancelar");
    btnCancelar.setBounds(120, 10, 100, 30);
    add(btnCancelar);
    btnCancelar.addActionListener(this);
  }

  public static void main(String[] args) {
    PracticaFormEvent form = new PracticaFormEvent();
    form.setBounds(10, 10, 400,300);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Practica Formulario Eventos");
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == btnAceptar) {
      System.out.println("Boton Aceptar");
      return;
    } else if (e.getSource() == btnCancelar) {
      System.out.println("Boton Cancelar");
      return;
    }

    throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
  }

}
