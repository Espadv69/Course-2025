package JPanelFiles;

import javax.swing.JOptionPane;

public class Dialog_input {

	public static void main(String[] args) {
		
		String nombreUsuario = JOptionPane.showInputDialog("Nombre");
		String edad = JOptionPane.showInputDialog("Edad");
		System.out.print("Hola, " + nombreUsuario + ". Tienes " + edad + " años.");

	}

}
