<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class login
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(login))
        Me.titLogin = New System.Windows.Forms.Label()
        Me.inputCorreo = New System.Windows.Forms.TextBox()
        Me.btnIngresar = New System.Windows.Forms.Button()
        Me.titNosbey = New System.Windows.Forms.Button()
        Me.BackgroundWorker1 = New System.ComponentModel.BackgroundWorker()
        Me.inputContraseña = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'titLogin
        '
        Me.titLogin.AutoSize = True
        Me.titLogin.Location = New System.Drawing.Point(10, 85)
        Me.titLogin.Name = "titLogin"
        Me.titLogin.Size = New System.Drawing.Size(209, 13)
        Me.titLogin.TabIndex = 0
        Me.titLogin.Text = "Para seguir, ingresa tu correo y contraseña"
        '
        'inputCorreo
        '
        Me.inputCorreo.Location = New System.Drawing.Point(35, 115)
        Me.inputCorreo.MaxLength = 30
        Me.inputCorreo.Name = "inputCorreo"
        Me.inputCorreo.Size = New System.Drawing.Size(163, 20)
        Me.inputCorreo.TabIndex = 1
        Me.inputCorreo.Text = "" & Global.Microsoft.VisualBasic.ChrW(13) & Global.Microsoft.VisualBasic.ChrW(10)
        '
        'btnIngresar
        '
        Me.btnIngresar.Location = New System.Drawing.Point(78, 166)
        Me.btnIngresar.Name = "btnIngresar"
        Me.btnIngresar.Size = New System.Drawing.Size(75, 23)
        Me.btnIngresar.TabIndex = 3
        Me.btnIngresar.Text = "Ingresar"
        Me.btnIngresar.UseVisualStyleBackColor = True
        '
        'titNosbey
        '
        Me.titNosbey.BackColor = System.Drawing.Color.Transparent
        Me.titNosbey.BackgroundImage = CType(resources.GetObject("titNosbey.BackgroundImage"), System.Drawing.Image)
        Me.titNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.titNosbey.Enabled = False
        Me.titNosbey.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.titNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.titNosbey.Location = New System.Drawing.Point(15, 10)
        Me.titNosbey.Name = "titNosbey"
        Me.titNosbey.Size = New System.Drawing.Size(206, 55)
        Me.titNosbey.TabIndex = 4
        Me.titNosbey.UseVisualStyleBackColor = False
        '
        'inputContraseña
        '
        Me.inputContraseña.Location = New System.Drawing.Point(35, 140)
        Me.inputContraseña.MaxLength = 30
        Me.inputContraseña.Name = "inputContraseña"
        Me.inputContraseña.Size = New System.Drawing.Size(163, 20)
        Me.inputContraseña.TabIndex = 5
        Me.inputContraseña.Text = "" & Global.Microsoft.VisualBasic.ChrW(13) & Global.Microsoft.VisualBasic.ChrW(10)
        '
        'login
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.inputContraseña)
        Me.Controls.Add(Me.titNosbey)
        Me.Controls.Add(Me.btnIngresar)
        Me.Controls.Add(Me.inputCorreo)
        Me.Controls.Add(Me.titLogin)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "login"
        Me.Text = "Login"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents titLogin As Label
    Friend WithEvents inputCorreo As TextBox
    Friend WithEvents btnIngresar As Button
    Friend WithEvents titNosbey As Button
    Friend WithEvents BackgroundWorker1 As System.ComponentModel.BackgroundWorker
    Friend WithEvents inputContraseña As TextBox
End Class
