<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class SignInScreen
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(SignInScreen))
        Me.btnSignIn = New System.Windows.Forms.Button()
        Me.tbxAddres = New System.Windows.Forms.TextBox()
        Me.tbxName = New System.Windows.Forms.TextBox()
        Me.lblSignIn = New System.Windows.Forms.Label()
        Me.tbxRepeatPassword = New System.Windows.Forms.TextBox()
        Me.tbxPassword = New System.Windows.Forms.TextBox()
        Me.lblError = New System.Windows.Forms.Label()
        Me.lblRepeatPassword = New System.Windows.Forms.Label()
        Me.lblPassword = New System.Windows.Forms.Label()
        Me.lblName = New System.Windows.Forms.Label()
        Me.lblAddres = New System.Windows.Forms.Label()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'btnSignIn
        '
        Me.btnSignIn.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnSignIn.FlatAppearance.BorderSize = 0
        Me.btnSignIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSignIn.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnSignIn.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnSignIn.Location = New System.Drawing.Point(623, 610)
        Me.btnSignIn.Name = "btnSignIn"
        Me.btnSignIn.Size = New System.Drawing.Size(120, 30)
        Me.btnSignIn.TabIndex = 7
        Me.btnSignIn.Text = "Registrarme"
        Me.btnSignIn.UseVisualStyleBackColor = False
        '
        'tbxAddres
        '
        Me.tbxAddres.BackColor = System.Drawing.Color.White
        Me.tbxAddres.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxAddres.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxAddres.Location = New System.Drawing.Point(574, 460)
        Me.tbxAddres.MaxLength = 30
        Me.tbxAddres.Name = "tbxAddres"
        Me.tbxAddres.Size = New System.Drawing.Size(218, 24)
        Me.tbxAddres.TabIndex = 6
        Me.tbxAddres.Text = "admin@anima.edu.uy"
        '
        'tbxName
        '
        Me.tbxName.BackColor = System.Drawing.Color.White
        Me.tbxName.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxName.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxName.Location = New System.Drawing.Point(574, 410)
        Me.tbxName.MaxLength = 30
        Me.tbxName.Name = "tbxName"
        Me.tbxName.Size = New System.Drawing.Size(218, 24)
        Me.tbxName.TabIndex = 5
        Me.tbxName.Text = "Admin"
        '
        'lblSignIn
        '
        Me.lblSignIn.AutoSize = True
        Me.lblSignIn.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lblSignIn.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblSignIn.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblSignIn.Location = New System.Drawing.Point(455, 355)
        Me.lblSignIn.Name = "lblSignIn"
        Me.lblSignIn.Size = New System.Drawing.Size(457, 24)
        Me.lblSignIn.TabIndex = 4
        Me.lblSignIn.Text = "Completa los siguientes campos para registrarte"
        '
        'tbxRepeatPassword
        '
        Me.tbxRepeatPassword.BackColor = System.Drawing.Color.White
        Me.tbxRepeatPassword.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxRepeatPassword.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxRepeatPassword.Location = New System.Drawing.Point(574, 560)
        Me.tbxRepeatPassword.MaxLength = 30
        Me.tbxRepeatPassword.Name = "tbxRepeatPassword"
        Me.tbxRepeatPassword.PasswordChar = Global.Microsoft.VisualBasic.ChrW(42)
        Me.tbxRepeatPassword.Size = New System.Drawing.Size(218, 24)
        Me.tbxRepeatPassword.TabIndex = 9
        Me.tbxRepeatPassword.Text = "*********"
        '
        'tbxPassword
        '
        Me.tbxPassword.BackColor = System.Drawing.Color.White
        Me.tbxPassword.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxPassword.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxPassword.Location = New System.Drawing.Point(574, 510)
        Me.tbxPassword.MaxLength = 30
        Me.tbxPassword.Name = "tbxPassword"
        Me.tbxPassword.PasswordChar = Global.Microsoft.VisualBasic.ChrW(42)
        Me.tbxPassword.Size = New System.Drawing.Size(218, 24)
        Me.tbxPassword.TabIndex = 8
        Me.tbxPassword.Text = "*********"
        '
        'lblError
        '
        Me.lblError.AutoSize = True
        Me.lblError.BackColor = System.Drawing.Color.Firebrick
        Me.lblError.Font = New System.Drawing.Font("Yu Gothic UI", 9.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblError.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.lblError.Location = New System.Drawing.Point(635, 590)
        Me.lblError.Name = "lblError"
        Me.lblError.Size = New System.Drawing.Size(100, 15)
        Me.lblError.TabIndex = 17
        Me.lblError.Text = "  Datos invalidos  "
        Me.lblError.Visible = False
        '
        'lblRepeatPassword
        '
        Me.lblRepeatPassword.AutoSize = True
        Me.lblRepeatPassword.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblRepeatPassword.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblRepeatPassword.Location = New System.Drawing.Point(575, 540)
        Me.lblRepeatPassword.Name = "lblRepeatPassword"
        Me.lblRepeatPassword.Size = New System.Drawing.Size(142, 16)
        Me.lblRepeatPassword.TabIndex = 16
        Me.lblRepeatPassword.Text = "Repetir Contraseña"
        '
        'lblPassword
        '
        Me.lblPassword.AutoSize = True
        Me.lblPassword.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblPassword.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblPassword.Location = New System.Drawing.Point(575, 490)
        Me.lblPassword.Name = "lblPassword"
        Me.lblPassword.Size = New System.Drawing.Size(87, 16)
        Me.lblPassword.TabIndex = 15
        Me.lblPassword.Text = "Contraseña"
        '
        'lblName
        '
        Me.lblName.AutoSize = True
        Me.lblName.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblName.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblName.Location = New System.Drawing.Point(575, 390)
        Me.lblName.Name = "lblName"
        Me.lblName.Size = New System.Drawing.Size(63, 16)
        Me.lblName.TabIndex = 14
        Me.lblName.Text = "Nombre"
        '
        'lblAddres
        '
        Me.lblAddres.AutoSize = True
        Me.lblAddres.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblAddres.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblAddres.Location = New System.Drawing.Point(575, 440)
        Me.lblAddres.Name = "lblAddres"
        Me.lblAddres.Size = New System.Drawing.Size(55, 16)
        Me.lblAddres.TabIndex = 13
        Me.lblAddres.Text = "Correo"
        '
        'btnPrevious
        '
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1320, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(32, 32)
        Me.btnPrevious.TabIndex = 13
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(554, 70)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(259, 275)
        Me.imgNosbey.TabIndex = 32
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'SignInScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.lblError)
        Me.Controls.Add(Me.lblRepeatPassword)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.lblPassword)
        Me.Controls.Add(Me.lblName)
        Me.Controls.Add(Me.tbxRepeatPassword)
        Me.Controls.Add(Me.lblAddres)
        Me.Controls.Add(Me.tbxPassword)
        Me.Controls.Add(Me.btnSignIn)
        Me.Controls.Add(Me.tbxAddres)
        Me.Controls.Add(Me.tbxName)
        Me.Controls.Add(Me.lblSignIn)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "SignInScreen"
        Me.Text = "Registro"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnSignIn As Button
    Friend WithEvents tbxAddres As TextBox
    Friend WithEvents tbxName As TextBox
    Friend WithEvents lblSignIn As Label
    Friend WithEvents tbxRepeatPassword As TextBox
    Friend WithEvents tbxPassword As TextBox
    Friend WithEvents lblAddres As Label
    Friend WithEvents lblRepeatPassword As Label
    Friend WithEvents lblPassword As Label
    Friend WithEvents lblName As Label
    Friend WithEvents btnPrevious As Button
    Friend WithEvents lblError As Label
    Friend WithEvents imgNosbey As Button
End Class
